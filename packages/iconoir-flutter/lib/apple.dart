import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Apple extends StatelessWidget {
  const Apple({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Apple.svg');
}
