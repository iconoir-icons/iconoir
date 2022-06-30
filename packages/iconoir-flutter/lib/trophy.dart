import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Trophy extends StatelessWidget {
  const Trophy({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Trophy.svg');
}
