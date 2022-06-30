import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Walking extends StatelessWidget {
  const Walking({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Walking.svg');
}
