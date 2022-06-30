import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TestTube extends StatelessWidget {
  const TestTube({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TestTube.svg');
}
