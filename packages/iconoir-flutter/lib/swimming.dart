import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Swimming extends StatelessWidget {
  const Swimming({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Swimming.svg');
}
