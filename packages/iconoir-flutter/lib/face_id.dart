import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FaceId extends StatelessWidget {
  const FaceId({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FaceId.svg');
}
