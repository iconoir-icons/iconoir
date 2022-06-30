import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Rain extends StatelessWidget {
  const Rain({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Rain.svg');
}
