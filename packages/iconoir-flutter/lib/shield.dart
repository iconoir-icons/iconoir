import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Shield extends StatelessWidget {
  const Shield({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Shield.svg');
}
